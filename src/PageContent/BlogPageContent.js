import React from 'react'

function BlogPageContent() {
  return (
    <section className='mx-auto w-2/3 p-10 rounded-3xl shadow-2xl'>
      <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-none my-3">
            Django React Intregation
      </h1>
      <div className='my-5'>4 April 2002</div>
      <div className='subtitle text-normal font-semibold italic text-red-600 mb-2'>
        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className='img bg-contain my-10 opacity-100'>
        <img src='https://gatsby-markdown-personal-website.netlify.app/static/88dfe277f37d634306304f290eccd81a/4b190/cover.jpg'/>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
  )
}

export default BlogPageContent
