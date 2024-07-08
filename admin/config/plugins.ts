export default () => ({
  seo: {
    enabled: true,
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor",
  },
});
