export const setup = () => {
    vim.api.nvim_buf_create_user_command(0, "Hello", () => {
        print("Hello")
    }, {})
}
