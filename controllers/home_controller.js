// just for hosting 
// after hosting it should be appered on localhost:3000 or home page
module.exports.home = (req, res) => {
    res.sendFile(__dirname + '/index.html');
}