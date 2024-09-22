import "./index.css";
import { Players } from "../game/types";
import { Input } from "./Input";
import { HomeButtons } from "./HomeButtons";
import { useCreatePlayersMutation } from "../../gql/generated";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const defaultPlayer: Players = {
  player_one: "",
  player_two: "",
  sign_one: "",
  sign_two: "",
};

const handleDefaultValues = (value: string, defaultValue: string): string =>
  value.length === 0 ? defaultValue : value;

export const Home = () => {
  const navigate = useNavigate();

  const [createPlayers, { loading: createPlayerLoading }] =
    useCreatePlayersMutation();

  const handleSubmit = async (values: Players) => {
    await createPlayers({
      variables: {
        playersCreateInput: {
          player_one: handleDefaultValues(values.player_one, "Player one"),
          player_two: handleDefaultValues(values.player_two, "Player two"),
          sign_one: handleDefaultValues(values.sign_one, "X"),
          sign_two: handleDefaultValues(values.sign_two, "O"),
          score: "0-0",
        },
      },
      onCompleted: async (data) => {
        toast.success("Players create successfully!");
        navigate(`/game/${data.createPlayers.id}`);
      },
      onError() {
        toast.error("Failed to create players!");
      },
    });
  };

  if (createPlayerLoading) {
    <>Uploading Players</>;
  }

  return (
    <div className="bodyContainer">
      <div className="container">
        <div className="title">Register</div>
        <Formik
          initialValues={defaultPlayer}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            player_one: Yup.string(),
            sign_one: Yup.string().max(1),
            player_two: Yup.string(),
            sign_two: Yup.string().max(1),
          })}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="formContainer2">
              <Input label="Player one:" name={"player_one"} type="text" />
              <Input label="Sign one:" name={"sign_one"} type="text" />
              <Input label="Player two:" name={"player_two"} type="text" />
              <Input label="Sign two:" name={"sign_two"} type="text" />
              <HomeButtons
                onClear={() => {
                  setFieldValue("player_one", defaultPlayer.player_one);
                  setFieldValue("sign_one", defaultPlayer.sign_one);
                  setFieldValue("player_two", defaultPlayer.player_two);
                  setFieldValue("sign_two", defaultPlayer.sign_two);
                }}
                isSubmitting={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
      <div className="container">
        <div className="buttons">
          <div
            className="register-input-button"
            onClick={() => {
              navigate("/leaderboard");
            }}
          >
            <div className="buttonClass">Leaderboard</div>
          </div>
        </div>
      </div>
    </div>
  );
};
