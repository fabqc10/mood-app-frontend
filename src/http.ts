const API_URI = "http://localhost:3000/api/moodwave";

export const httpGetFeelings = async () =>{
 const response = await fetch(API_URI);
 return response.json();
}

export const httpPostFeeling = async (feeling: FeelingForm) =>{
    await fetch(API_URI,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feeling)
    })
}