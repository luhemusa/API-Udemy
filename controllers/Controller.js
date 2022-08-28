const axios = require('axios')

// Test 
const test = async (req, res) => {
    res.send('Hello Test API')
}

//Get All Courses
const getAllFreeCourses = async (req, res) => {
    const url = 'https://www.udemy.com/api-2.0/courses/?search=*&category=Udemy%20Free%20Resource%20Center'
    try {
        const result = await axios.get(url, {
            headers:{
                "Accept": "application/json, text/plain, */*",
                "Authorization": `Basic ${process.env.API_KEY}`,
                "Content-Type": "application/json;charset=utf-8"
            }
        })

        res.status(200).json(result.data)

    } catch (error) {
        console.log("Error en consulta: ", error)
    }
    
}



module.exports = {
    test,
    getAllFreeCourses
}