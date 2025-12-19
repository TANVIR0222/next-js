// import React from 'react'




const Page = async ({ params }) => {
    // console.log(params);

    const { slug } = await params;
    console.log(slug);


    return (
        <div>page</div>
    )
}

export default Page