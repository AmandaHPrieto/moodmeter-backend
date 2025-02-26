CREATE TABLE retours (
  id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  contenu TEXT NOT NULL,
  eleve_user_id BIGINT(20) UNSIGNED NOT NULL,
  ue_id BIGINT(20) UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (eleve_user_id) REFERENCES eleves(user_id) ON DELETE CASCADE,
  FOREIGN KEY (ue_id) REFERENCES ues(id) ON DELETE CASCADE
);
