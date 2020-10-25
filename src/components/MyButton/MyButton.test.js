import { render, shallow } from 'enzyme';
import MyButton from './MyButton';

describe('Renders the Button', () => {

    it('Renders default as Primary', () => {
        const wrapper = render(<MyButton />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
    it('Renders Primary', () => {
        const wrapper = render(<MyButton type='primary' text='Hello' />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });
    it('Renders Secondary', () => {
        const wrapper = render(<MyButton type='secondary' />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });

    it('Listens for button click', () => {
        const mockListener = jest.fn();
        const wrapper = shallow(<MyButton onClick={mockListener} />)
        expect(wrapper).toBeDefined();

        wrapper
            .find('button')
            .first()
            .props()
            .onClick();
        wrapper.update();
        expect(mockListener).toBeCalled();

    });

})