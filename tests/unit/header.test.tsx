import { test } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import Header from '@/src/features/layout/Header'

test('render Header component without errors', () => {
    render(<Header links={[{ text: 'test1', link: 'test1link' }]} />)
})
