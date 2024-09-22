function Sign({ checked, sign }: { checked: boolean; sign: string }) {
  return checked ? <>{sign}</> : <></>;
}

export default Sign;
