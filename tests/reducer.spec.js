import {expect} from 'chai';
import reducer from '../src/reducer/reducer';
import data from '../static/data/data';

describe('Reducer', () => {
    const actual = (() => {
        return (action) => reducer(data, action);
    })();
    const expected = (i, props) => {
        return [
            ...data.slice(0, i),
            {...data[i], ...props},
            ...data.slice(i + 1)
        ];
    };

    describe('Heart Click', () => {
        it('should change color of heart', () => {
            const i = 0;
            expect(actual({i, type: 'ON_HEART_CLICK'})).to.be.deep.equal(expected(i, {likes: {like: !data[i].likes.like}}));
        });
    });

    describe('Avatar Enter', () => {
        it('should change icon of avatar', () => {
            const i = 0;
            expect(actual({i, type: 'ON_AVATAR_ENTER'})).to.be.deep.equal(expected(i, {avatar: 'icon-emo-laugh'}));
        });
    });

    describe('Avatar Leave', () => {
        it('should change icon of avatar', () => {
            const i = 0;
            expect(actual({i, type: 'ON_AVATAR_LEAVE'})).to.be.deep.equal(expected(i, {avatar: 'icon-emo-happy'}));
        });
    });
});