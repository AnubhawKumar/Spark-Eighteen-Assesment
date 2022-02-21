import getSocialPosts from "./socialLocalDataBase"

const getSocialPostsData = async(data) => {
    try{
        const response = await getSocialPosts(data);
        if(response.statusCode===200){
            const {data,count} = response;
            console.log(data,count);
            return {data,count};
        }
    }catch(err){
        document.write(`${err.code}!!${err.message}`)
    }
}

export default getSocialPostsData;