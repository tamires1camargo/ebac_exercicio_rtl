import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve inserir dois comentários', () => {
        render(<PostComment/>);
        
        fireEvent.change(screen.getByTestId('input-comentar'), {target: {value: 'Olá, Mundo!'}})
        fireEvent.click(screen.getByTestId('botao-comentar'));

        fireEvent.change(screen.getByTestId('input-comentar'), {target: {value: 'Olá, universo!'}})
        fireEvent.click(screen.getByTestId('botao-comentar'));

        expect(screen.getAllByTestId('comentarios')).toHaveLength(2)
    })
});