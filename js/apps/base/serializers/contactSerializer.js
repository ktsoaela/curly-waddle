export function serializeContactForm(formData) {
    return {
        name: formData.get("name"),
        email: formData.get("email")
    };
}
