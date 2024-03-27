DELIMITER //
CREATE PROCEDURE sp_select_itens()
BEGIN
    SELECT 
        tb_itens.id, 
        tb_itens.nome_itens, 
        tb_tipo_itens.tipo AS tipo, 
        tb_itens.custo, 
        tb_itens.peso, 
        tb_raridade.raridade AS raridade_id, 
        tb_itens.efeito,
        GROUP_CONCAT(tb_tags.tag) AS tags
    FROM 
        tb_itens
    INNER JOIN 
        tb_tipo_itens ON tb_itens.tipo_id = tb_tipo_itens.id
    INNER JOIN 
        tb_raridade ON tb_itens.raridade_id = tb_raridade.id
    LEFT JOIN 
        tb_tag_itens ON tb_itens.id = tb_tag_itens.item_id
    LEFT JOIN 
        tb_tags ON tb_tag_itens.tag_id = tb_tags.id
    GROUP BY 
        tb_itens.id;
END //
DELIMITER ;
CAll sp_select_itens()