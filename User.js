import uuid from 'uuid/v1'
import {fs} from 'fs';
import {path} from 'path';


export class User {
    constructor(id, email, pass, posts, likes, reposts) {
        this.id = id;
        this.email = email;
        this.pass = pass;
        this.posts = posts;
        this.likes = likes;
        this.reposts = reposts;
    }

    register() {
        const filePath = path.join(__dirname, 'users.json');

        fs.readFile("users.json",'utf8', (err, data) => {
            if (err) {
                console.error("Ошибка при чтении файла", err);
            }
            
            try {
                let users = JSON.parse(data);
                
                users.push({id: uuid(), email: this.email, pass: this.pass, posts: [], likes: [], reposts: []});
    
                // Запись обновленного массива обратно в файл users.json
                fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
                    if (err) {
                        console.error('Ошибка при записи файла:', err);
                        return;
                    }
                    console.log('Пользователь успешно добавлен!');
                });
    
            } catch (parseErr) {
                console.error('Ошибка при парсинге JSON:', parseErr);
            }
    
        })
    }

    static login(email, pass) {
        fs.readFile("users.json", 'utf8', (err, data) => {
            if (err) {
                console.log('Ошибка при чтении файла:', err);
                return;
            }

            let users = JSON.parse(data);

            for (const user of users) {
                const userEmail = user.email;
                const userPass = user.pass;
                const posts = user.posts;
                const likes = user.likes;
                const reposts = user.reposts;

                if (email == userEmail && pass ==userPass) {
                    return User(email, pass, posts, likes, reposts)
                }
            }
        })
    }
}