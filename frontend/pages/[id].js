
export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/post/");
    const data = await res.json()


    const paths = data.map(item => {
        return {
            params: { id: item._id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("http://localhost:5000/api/post/find/" + id)
    const data = await res.json()
    
    return {
        props: { item: data }
    }

   
}


const postId = ({ item }) => {
    console.log(item)

    return (
        <div className="singlePost">
            <img src={item.postImage}  width={270} height={270}/>
            <h2>{item.postTitle}</h2>
            <p>{item.postSubtitle}</p>
            <p style={{width:"60%"}}>{item.postDescription}</p>
        </div>

    )
}

export default postId;