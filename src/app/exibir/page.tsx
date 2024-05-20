'use client';

import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  nome_completo: string;
  cargo: string;
  email: string;
  contato: string;
  empresa: string;
  pais: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]); // Estado para armazenar a lista de usuários

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/listar_usuarios'); // Requisição para a API para buscar usuários
        if (!res.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        const data = await res.json(); // Converte a resposta para JSON
        setUsers(data); // Atualiza o estado com os dados dos usuários obtidos
      } catch (error) {
        console.error('Erro ao buscar usuários:', error); // Exibe um erro caso ocorra problema na requisição
      }
    };

    fetchUsers(); // Chama a função para buscar os usuários ao carregar o componente
  }, []); // [] como segundo argumento garante que useEffect só será executado uma vez

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center"> {/* Container principal com fundo cinza e centralização */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"> {/* Container branco com sombra, padding e arredondamento */}
        <h1 className="text-3xl font-bold text-primary mb-4">Usuários Cadastrados</h1> {/* Título da página com estilo */}
        <ul>
          {users.map((user) => ( // Mapeia e exibe cada usuário da lista
            <li key={user.id} className="mb-4"> {/* Item da lista com margin bottom */}
              <p className="text-lg text-gray-800 font-bold">{user.nome_completo}</p> {/* Nome completo do usuário em negrito */}
              <p className="text-gray-700">Cargo: {user.cargo}</p> {/* Cargo do usuário */}
              <p className="text-gray-700">Email: {user.email}</p> {/* Email do usuário */}
              <p className="text-gray-700">Contato: {user.contato}</p> {/* Contato do usuário */}
              <p className="text-gray-700">Empresa: {user.empresa}</p> {/* Empresa do usuário */}
              <p className="text-gray-700">País: {user.pais}</p> {/* País do usuário */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersPage;
