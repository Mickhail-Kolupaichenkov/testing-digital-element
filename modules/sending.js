export async function submitForm(formData) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true };
}
