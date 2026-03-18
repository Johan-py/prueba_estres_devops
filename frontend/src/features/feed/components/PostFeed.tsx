'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: number
  username: string
  avatar: string
  content: string
  image: string
  time: string
  tags: string[]
}

export const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching posts:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <section className="flex flex-col space-y-4 w-full">
      {/* Git Practice Instruction Box */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 mb-2">
        <h4 className="text-blue-400 font-bold text-sm mb-1 flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Zona de Práctica Git para Estudiantes
        </h4>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Para "subir" tu propia publicación, edita el archivo{' '}
          <code className="bg-neutral-800 text-blue-300 px-1 rounded">
            backend/src/modules/posts/data/posts.json
          </code>{' '}
          añadiendo un nuevo objeto al array, luego realiza un <span className="text-white font-mono">git commit</span> y{' '}
          <span className="text-white font-mono">push</span>.
        </p>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-neutral-900 border border-neutral-800/60 rounded-xl overflow-hidden shadow-sm hover:border-neutral-800 transition-colors"
        >
          {/* Post Header */}
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-800 border-2 border-neutral-800 ring-1 ring-white/5">
                <img src={post.avatar} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight text-white/90">{post.username}</p>
                <div className="flex items-center space-x-1 text-[11px] text-neutral-500 font-medium">
                  <span>{post.time}</span>
                  <span>•</span>
                  <svg
                    xmlns="http://www.w3.org/2000/center"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="text-neutral-600 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5">
              <svg
                xmlns="http://www.w3.org/2000/center"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-neutral-200 leading-[1.4] text-sm font-normal">{post.content}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-blue-500/90 hover:underline cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="relative overflow-hidden bg-neutral-900/50 border-t border-white/5">
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-auto object-contain max-h-[600px] mx-auto"
              />
            </div>
          )}

          {/* Visual Stats Bar */}
          <div className="px-4 py-3 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
            <div className="flex items-center space-x-1.5">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center border-2 border-neutral-900 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/center"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center border-2 border-neutral-900">
                  <svg
                    xmlns="http://www.w3.org/2000/center"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="white"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>
              <span className="text-[12px] text-neutral-500 font-semibold tracking-tight">
                {Math.floor(Math.random() * 2000)} Likes
              </span>
            </div>
            <div className="flex space-x-3 text-[12px] text-neutral-500 font-medium">
              <span>{Math.floor(Math.random() * 100)} comentarios</span>
              <span>{Math.floor(Math.random() * 50)} veces compartido</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
