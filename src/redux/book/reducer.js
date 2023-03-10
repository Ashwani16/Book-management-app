import { GET_RES_SUCCESS } from "./actionTypes";

const initial_state={
    books:[
        {
          "id": 1,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Novel",
          "release_year": 2019,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 2,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Science_Fiction",
          "release_year": 2020,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 3,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Novel",
          "release_year": 2021,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 4,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Science_Fiction",
          "release_year": 2022,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 5,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Thriller",
          "release_year": 2018,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 6,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Thriller",
          "release_year": 2017,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 7,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Novel",
          "release_year": 2016,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 8,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "",
          "book_name": "Full-Stack Web Development",
          "category": "Science_Fiction",
          "release_year": 2015,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 9,
          "no_of_chapters": 6,
          "author": "Jyoti Singh",
          "cover_photo": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1609266429-leave-the-world-behind-1609266421.jpg?crop=1xw:1xh;center,top&resize=480:*",
          "book_name": "Development web",
          "category": "Motivational",
          "release_year": 2014,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        },
        {
          "id": 10,
          "no_of_chapters": 6,
          "author": "Masai",
          "cover_photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEziFnbLshsI42ikYObkKM8Gqqbqnrue8W63OIyfdvg&s",
          "book_name": "bookname 10",
          "category": "Motivational",
          "release_year": 2013,
          "chapters": [
            {
              "name": "HTML",
              "pages": 20
            },
            {
              "name": "CSS",
              "pages": 25
            }
          ]
        }
      ]

}
export const reducer=(state=initial_state,{payload,type})=>{
    switch(type){
        case GET_RES_SUCCESS:{
            return {...state,books:payload}
        }
        default:
            return state;
    }
}