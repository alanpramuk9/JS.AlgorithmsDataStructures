import {anagrams} from '../src/Algorithms/anagrams';


test('Tests for anagrams', () => {
    expect(anagrams('room', 'moor')).toBe(true)
});

