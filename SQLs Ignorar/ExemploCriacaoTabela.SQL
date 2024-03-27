-- Criação da tabela "ItemTypes"
CREATE TABLE IF NOT EXISTS ItemTypes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Criação da tabela "Rarities"
CREATE TABLE IF NOT EXISTS Rarities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Criação da tabela "Tags"
CREATE TABLE IF NOT EXISTS Tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Criação da tabela "Items"
CREATE TABLE IF NOT EXISTS Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type_id INT NOT NULL,
    cost VARCHAR(50),
    weight DECIMAL(10,2),
    rarity_id INT NOT NULL,
    effect TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (type_id) REFERENCES ItemTypes (id),
    FOREIGN KEY (rarity_id) REFERENCES Rarities (id)
);

-- Criação da tabela de relacionamento "ItemTags"
CREATE TABLE IF NOT EXISTS ItemTags (
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Items (id),
    FOREIGN KEY (tag_id) REFERENCES Tags (id),
    PRIMARY KEY (item_id, tag_id)
);

-- Populando a tabela ItemTypes
INSERT INTO ItemTypes (name) VALUES ('Poção'), ('Arma'), ('Armadura');

-- Populando a tabela Rarities
INSERT INTO Rarities (name) VALUES ('Comum'), ('Raro'), ('Épico');

-- Populando a tabela Tags
INSERT INTO Tags (name) VALUES 
    ('Poção'), ('Alquimia'), ('Comum'), ('Cura'),
    ('Espada'), ('Magia'), ('Ofensiva'),
    ('Elmo'), ('Defesa'), ('Mágico');

-- Populando a tabela Items (exemplo de um item)
INSERT INTO Items (name, type_id, cost, weight, rarity_id, effect) 
VALUES ('Poção de Cura', 1, '$25', 0.5, 1, 'Uma poção que cura 1d6 de vida');

-- Populando a tabela ItemTags (relacionando as tags ao item de exemplo)
INSERT INTO ItemTags (item_id, tag_id) VALUES
    (1, 1), -- Poção
    (1, 2), -- Alquimia
    (1, 3), -- Comum
    (1, 4); -- Cura

select * from Items