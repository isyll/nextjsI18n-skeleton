import { test } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import Logo from '@/src/features/logo/Logo'

test('render Logo component without errors', () => {
    render(<Logo />)
})
