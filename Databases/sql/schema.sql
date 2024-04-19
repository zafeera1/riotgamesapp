-- Create Players table
CREATE TABLE Players (
    player_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    -- Add other profile-related columns as needed
);

-- Create Matches table
CREATE TABLE Matches (
    match_id INT PRIMARY KEY AUTO_INCREMENT,
    match_datetime DATETIME NOT NULL,
    winner_id INT NOT NULL,
    loser_id INT NOT NULL,
    FOREIGN KEY (winner_id) REFERENCES Players(player_id),
    FOREIGN KEY (loser_id) REFERENCES Players(player_id)
    -- Add other match-related columns as needed
);

-- Create Leaderboards table
CREATE TABLE Leaderboards (
    leaderboard_id INT PRIMARY KEY AUTO_INCREMENT,
    leaderboard_name VARCHAR(255) UNIQUE NOT NULL
);

-- Create PlayerRanks table
CREATE TABLE PlayerRanks (
    rank_id INT PRIMARY KEY AUTO_INCREMENT,
    player_id INT NOT NULL,
    leaderboard_id INT NOT NULL,
    rank_position INT NOT NULL,
    FOREIGN KEY (player_id) REFERENCES Players(player_id),
    FOREIGN KEY (leaderboard_id) REFERENCES Leaderboards(leaderboard_id)
);

-- Create Champions table
CREATE TABLE Champions (
    champion_id INT PRIMARY KEY AUTO_INCREMENT,
    champion_name VARCHAR(255) UNIQUE NOT NULL
    -- Add other champion-related columns as needed
);

-- Create Users table for security/authentication
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL
    -- Add other security-related columns as needed
);

-- Create Interaction table (example)
CREATE TABLE Interactions (
    interaction_id INT PRIMARY KEY AUTO_INCREMENT,
    player_id INT NOT NULL,
    interaction_type VARCHAR(50) NOT NULL,
    -- Add other columns as needed, e.g., timestamp, interaction details, etc.
    FOREIGN KEY (player_id) REFERENCES Players(player_id)
);
