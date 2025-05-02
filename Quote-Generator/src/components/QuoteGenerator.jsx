import React from 'react'

const QuoteGenerator = () => {
    return (
        <div className='bg-gray-100 text-black shadow-black mt-30 max-w-2xl p-15 rounded-xl shadow-2xl flex flex-col justify-center items-center font-san-serif'>
            <div className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, obcaecati enim. Ipsum qui nam, possimus consequuntur architecto aspernatur a accusantium. Ad eius, provident ut iusto eveniet beatae omnis odio assumenda!
            </div>
            <div className='text-lg italic my-5'>-Author</div>
            <div>
                <button className='cursor-pointer p-2 shadow-black shadow-2xl rounded-2xl font-bold'>Get New Quote </button>
            </div>
        </div>
    )
}

export default QuoteGenerator