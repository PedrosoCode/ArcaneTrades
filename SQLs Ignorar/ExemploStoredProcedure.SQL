-- Criação da stored procedure para buscar todos os itens
DELIMITER //

CREATE PROCEDURE ExibirItens()
BEGIN
    SELECT 
        i.id, 
        i.name, 
        it.name AS type, 
        i.cost, 
        i.weight, 
        r.name AS rarity, 
        i.effect,
        GROUP_CONCAT(t.name) AS tags
    FROM 
        Items i
    INNER JOIN 
        ItemTypes it ON i.type_id = it.id
    INNER JOIN 
        Rarities r ON i.rarity_id = r.id
    LEFT JOIN 
        ItemTags itg ON i.id = itg.item_id
    LEFT JOIN 
        Tags t ON itg.tag_id = t.id
    GROUP BY 
        i.id;
END //

DELIMITER ;
