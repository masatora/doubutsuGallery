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
            const i = 1;
            expect(actual({i, type: 'ON_AVATAR_ENTER'})).to.be.deep.equal(expected(i, {avatar: 'icon-emo-devil'}));
        });
    });

    describe('Avatar Leave', () => {
        it('should change icon of avatar', () => {
            const i = 2;
            expect(actual({i, type: 'ON_AVATAR_LEAVE'})).to.be.deep.equal(expected(i, {avatar: 'icon-emo-happy'}));
        });
    });

    describe('OK Button Enter', () => {
        it('should change icon of OK button', () => {
            const i = 3;
            expect(actual({i, type: 'ON_OK_ENTER'})).to.be.deep.equal(expected(i, {icon_ok: 'icon-ok-circled2'}));
        });
    });

    describe('OK Button Leave', () => {
        it('should change icon of OK button', () => {
            const i = 4;
            expect(actual({i, type: 'ON_OK_LEAVE'})).to.be.deep.equal(expected(i, {icon_ok: 'icon-ok-circled'}));
        });
    });

    describe('Article Click', () => {
        it('should change html tag to input', () => {
            const i = 5;
            expect(actual({i, type: 'ON_TEXT_CLICK'})).to.be.deep.equal(expected(i, {isText: false}));
        });
    });

    describe('Icon of Comment Enter', () => {
        it('should change icon of comment', () => {
            const i = 6;
            expect(actual({i, type: 'ON_COMMENT_ENTER'})).to.be.deep.equal(expected(i, {icon_comment: 'icon-comment-empty'}));
        });
    });

    describe('Icon of Comment Leave', () => {
        it('should change icon of comment', () => {
            const i = 7;
            expect(actual({i, type: 'ON_COMMENT_LEAVE'})).to.be.deep.equal(expected(i, {icon_comment: 'icon-comment'}));
        });
    });

    describe('OK Button Click', () => {
        it('should send comment', () => {
            const i = 8;
            expect(actual({i, type: 'ON_OK_CLICK', comment: {'abc': 'wwwww'}})).to.be.deep.equal(expected(i, {comments: [{'abc': 'wwwww'}].concat(data[i].comments)}));
        });
    });

    describe('Sent Article', () => {
        it('should send article', () => {
            const i = 9;
            expect(actual({i, type: 'ON_ARTICLE_SEND', isText: true, article: 'abc'})).to.be.deep.equal(expected(i, {isText: true, article: 'abc'}));
        });
    });
});