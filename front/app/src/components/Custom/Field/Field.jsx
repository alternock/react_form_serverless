export default function Field({
    placeholder,
    value,
    onChange
}) {
    return (
        <Input
            placeholder='alias@domain.com'
            size='md'
            name="email"
            value={value}
            onChange={onChange} />
    )
}