/**
 *
 */
export async function submitForm(formData) {
  await new Promise((_resolve) => setTimeout(_resolve, 1500));
  return { success: true };
}