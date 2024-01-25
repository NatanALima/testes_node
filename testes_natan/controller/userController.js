const users = [{id: 1, nome: "Carlinhos"},
               {id: 2, nome: "Rodolfo"}];

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        info: "Consultou todos os usuários",
        data: {
            users
        }
    })
}

exports.getOneUser = (req, res) => {
    const userInfo = users.filter(item => item.id == req.params.id)[0];
    res.status(200).json({
        info: "Consultou apenas um usuário",
        data: {
            user: userInfo
        }
    })
}