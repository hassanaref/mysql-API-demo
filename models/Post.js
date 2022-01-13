const db = require("../config/db");


class post {
    constructor(title, subject, created_at){
        this.title=title
        this.subject=subject
        this.created_at=created_at
    };

    async save() {
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1;
        let dd = d.getDate();
        let createdAtDate = `${yyyy}-${mm}-${dd}`;
        
        let sql = `
        insert into posts(
            title,
            subject,
            created_at
        )
        values(
            '${this.title}',
            '${this.subject}',
            '${createdAtDate}'
        )
        `;
        const [newPost, _] = await db.execute(sql);
            return newPost;
    }

    static getAll() {
        let sql = "select * from posts";;
        return db.execute(sql);
    }

    static getOne(id) {
        let sql = `select * from posts where id=${id}`;
        return db.execute(sql);
    }
}

module.exports = post