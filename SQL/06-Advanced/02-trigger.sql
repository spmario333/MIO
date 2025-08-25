delimiter |
CREATE TRIGGER tg_email
AFTER UPDATE ON user 
FOR EACH ROW
BEGIN 
IF OLD.email <> NEW.email THEN 
INSERT INTO email_history (user_id, email) VALUES (OLD.user_id, OLD.email);
END IF;
END;
|
delimiter ;