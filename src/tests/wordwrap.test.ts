import { wordWrap, ColumnWidth, WrappableText } from '../core/wordwrap'

describe('word Wrap', () => {
	it('breaks a word into silabus', () => {
		expect(wordWrap('', 5)).toBe('')
		expect(wordWrap('hello', 5)).toBe('hello')
		expect(wordWrap('longword', 4)).toBe('long\nword')
		expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd')
		expect(wordWrap('abc def', 4)).toBe('abc\ndef')
		expect(wordWrap('abc def ghi', 4)).toBe('abc\ndef\nghi')
		expect(wordWrap(' abcdf', 4)).toBe('\nabcd\nf')
	})
})

describe('column width',
	() => {
		it('prevents negative columns', () => {
			expect(() => ColumnWidth.create(-1))
				.toThrow('Negative column width is not allowed')
		})
		it('returns the value', () => {
			expect(ColumnWidth.create(1).value()).toBe(1)
		})
	})

describe('Wrappable Text', () => {
	it('returns the value', () => {
		expect(WrappableText.create('abc').value()).toBe('abc')
	});
})
