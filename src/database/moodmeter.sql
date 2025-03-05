-- Table des utilisateurs (élèves, enseignants, admins)
CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,  
  email VARCHAR(255) NOT NULL UNIQUE, 
  pseudo VARCHAR(255) NOT NULL,       
  password VARCHAR(255) NOT NULL,     
  role ENUM('enseignant', 'eleve', 'admin') NOT NULL, 
  nom VARCHAR(255) NOT NULL,          
  prenom VARCHAR(255) NOT NULL,       
  image VARCHAR(500) NULL,            
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);

-- Table des Promotions
CREATE TABLE Promotions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL, 
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des UEs
CREATE TABLE UEs (
  id INT AUTO_INCREMENT PRIMARY KEY,  
  nom VARCHAR(255) NOT NULL,         
  enseignantId INT NOT NULL,          
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (enseignantId) REFERENCES Users(id) ON DELETE CASCADE
);

-- Liaison des étudiants avec leur promotion
CREATE TABLE ElevePromo (
  eleveId INT NOT NULL,
  promoId INT NOT NULL,
  PRIMARY KEY (eleveId, promoId),
  FOREIGN KEY (eleveId) REFERENCES Users(id) ON DELETE CASCADE,
  FOREIGN KEY (promoId) REFERENCES Promotions(id) ON DELETE CASCADE
);

-- Liaison des promotions avec les UEs
CREATE TABLE PromoUEs (
  promoId INT NOT NULL,
  ueId INT NOT NULL,
  PRIMARY KEY (promoId, ueId),
  FOREIGN KEY (promoId) REFERENCES Promotions(id) ON DELETE CASCADE,
  FOREIGN KEY (ueId) REFERENCES UEs(id) ON DELETE CASCADE
);

-- Table des retours sur la semainee en cours
CREATE TABLE Retours (
  id INT AUTO_INCREMENT PRIMARY KEY,  
  clarte_consigne INT NOT NULL CHECK (clarte_consigne BETWEEN 1 AND 5), 
  difficulte INT NOT NULL CHECK (difficulte BETWEEN 1 AND 5), 
  reactivite_enseignant INT NOT NULL CHECK (reactivite_enseignant BETWEEN 1 AND 5), 
  ressenti_global INT NOT NULL CHECK (ressenti_global BETWEEN 1 AND 5), 
  eleveId INT NOT NULL,               
  ueId INT NOT NULL,                  
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (eleveId) REFERENCES Users(id) ON DELETE CASCADE, 
  FOREIGN KEY (ueId) REFERENCES UEs(id) ON DELETE CASCADE  
);

-- Table des retours précédents
CREATE TABLE ArchiveRetours (
  id INT AUTO_INCREMENT PRIMARY KEY,  
  retourId INT NOT NULL,              
  archivedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (retourId) REFERENCES Retours(id) ON DELETE CASCADE 
);
