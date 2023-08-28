import { render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(
        <>
        <Post />
        <PostComment />
        <ul/>
        </>
        )

        const firstComment = screen.getByTestId('comentario-um')
        expect(firstComment).toBeInTheDocument()
    
        const secondComment = screen.getByTestId('comentario-dois')
        expect(secondComment).toBeInTheDocument()
    })
})