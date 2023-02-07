import * as React from "react";
import { Modal } from "./modal";
import userEvent from '@testing-library/user-event'
import { render, screen, getAllByTestId, getByTestId, fireEvent } from '@testing-library/react';


describe('modal', () => {

  it('should render modal with default type', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('click on close button should close the modal', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} isClosable={true} />);
    const closeButton = screen.getByTestId('closeButton');
    userEvent.click(closeButton);
    expect(container).toMatchSnapshot();
  });

  it('press ESC key should close the modal', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} isClosable={true} />);
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(container).toMatchSnapshot();
  });

  it('should render modal with type success', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} type='success' />);
    expect(container).toMatchSnapshot();
  });

  it('should render modal with type comfirmation', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} type='comfirmation' />);
    expect(container).toMatchSnapshot();
  });

  it('should render modal with type formulaire', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} type='formulaire' />);
    expect(container).toMatchSnapshot();
  });

  it('should render modal with type componentInside', () => {
    const { container } = render(<Modal isOpen={true} contentTitle="Modal Title" success={true} contentBody="Modal Body" modalSize='600px' onClose={jest.fn()} type='componentInside'><div>test</div></Modal>);
    expect(container).toMatchSnapshot();
  });


});
