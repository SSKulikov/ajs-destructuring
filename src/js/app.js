export default function extractFields(obj) {
  const res = [];
  for (const i of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = i;
    res.push({
      id, name, icon, description,
    });
  }
  return res;
}
