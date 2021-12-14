import {getByRole, findByText, getByPlaceholderText} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
// provides a set of custom jest matchers that you can use to extend jest
// i.e. `.toBeVisible`
import '@testing-library/jest-dom'
test