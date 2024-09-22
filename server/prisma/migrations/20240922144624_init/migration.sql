-- CreateTable
CREATE TABLE `Players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `player_one` VARCHAR(191) NOT NULL DEFAULT 'Player one',
    `sign_one` VARCHAR(191) NOT NULL DEFAULT 'X',
    `player_two` VARCHAR(191) NOT NULL DEFAULT 'Player two',
    `sign_two` VARCHAR(191) NOT NULL DEFAULT 'O',
    `score` VARCHAR(191) NOT NULL DEFAULT '0-0',
    `password` VARCHAR(191) NOT NULL,
    `loged_in` BOOLEAN NOT NULL DEFAULT false,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `players_id` INTEGER NULL,
    `board` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Game` ADD CONSTRAINT `Game_players_id_fkey` FOREIGN KEY (`players_id`) REFERENCES `Players`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
