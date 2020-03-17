CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(20) CHARACTER SET ascii COLLATE ascii_bin UNIQUE NOT NULL,
	`email` VARCHAR(255) CHARACTER SET ascii COLLATE ascii_bin UNIQUE NOT NULL,
	`password` LONGTEXT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB;