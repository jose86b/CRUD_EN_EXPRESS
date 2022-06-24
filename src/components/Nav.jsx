
import React from 'react'

function Nav() {
  return (
    <div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg mt-12">
                {'{'}{'{'}#each tasks{'}'}{'}'}
                {'{'}{'{'}/each{'}'}{'}'}
                <table className="table-fixed w-full">
                <thead>
                    <tr className="bg-green-500 text-white">
                    <th className="w-20 py-4 ...">ID</th>
                    <th className="w-1/4 py-4 ...">Titulo</th>
                    <th className="w-1/2 py-4 ...">Contenido</th>
                    </tr>
                </thead>
                <tbody><tr>
                    <td className="py-3 px-6">{'{'}{'{'}id{'}'}{'}'}</td>
                    <td className="p-3">{'{'}{'{'}titulo{'}'}{'}'}</td>
                    <td className="p-3 text-center">{'{'}{'{'}contenido{'}'}{'}'}</td>
                    <td className="p-3 flex">
                        <form action="/tasks/delete" method="POST" className="mx-2">
                        <input type="hidden" defaultValue="{{id}}" name="id" />
                        <button className="bg-red-500 text-white px-3 py-1 rounded-sm" type="submit">
                            <i className="fas fa-trash" /></button>
                        </form>
                        <a href="/tasks/edit/{{id}}" className="bg-green-500 text-white px-3 py-1 rounded-sm">
                        <i className="fas fa-pen" /></a>
                    </td>
                    </tr></tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Nav