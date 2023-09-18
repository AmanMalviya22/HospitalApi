// just for hosting 
// after hosting it should be appered on localhost:3000 or home page
module.exports.home = (req, res) => {
    return res.send('<h1 style="text-align : center;"> Welcome To Hospital Api HomePage!</h1>')
}