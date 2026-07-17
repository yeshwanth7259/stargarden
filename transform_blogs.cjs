const fs = require('fs');

let raw = fs.readFileSync('c:/star gardens/blogPosts.js', 'utf8');
raw = raw.replace('const blogPosts = ', 'module.exports = ');
raw = raw.replace('export default blogPosts;', '');
fs.writeFileSync('c:/star gardens/temp_blogs.cjs', raw);

const blogs = require('./temp_blogs.cjs');

const imageMap = {
  1: { img: '/assets/office_plants_featured.png', inlineImage: '/assets/indoor_plant_close.png' },
  2: { img: '/assets/green_wall_featured.png', inlineImage: '/assets/vertical_garden_modular.png' },
  3: { img: '/assets/terrace_garden_featured.png', inlineImage: '/assets/terrace_garden_mulch.png' }
};

const fallbackImages = ['/assets/blog-1.jpg', '/assets/blog-2.jpg', '/assets/blog-3.jpg', '/assets/corporate_landscaping.jpg', '/assets/landscape_design.jpg'];

const formattedBlogs = blogs.map(b => {
  const meta = imageMap[b.id] || { img: fallbackImages[b.id % fallbackImages.length] };
  let newContent = b.content;
  
  if (meta.inlineImage) {
    newContent = newContent.replace('</p>', '</p>\n<div class="my-8 rounded-2xl overflow-hidden shadow-lg"><img src="' + meta.inlineImage + '" alt="Inline image" class="w-full h-auto object-cover" /></div>\n');
  }
  
  return {
    id: b.id.toString(),
    title: b.title,
    metaTitle: b.title,
    img: meta.img,
    tag: b.category,
    date: 'Oct 10, 2026',
    excerpt: b.metaDescription,
    content: newContent
  };
});

const finalContent = 'export const newBlogsData = ' + JSON.stringify(formattedBlogs, null, 2) + ';\n';
fs.writeFileSync('c:/star gardens/src/data/blogsData.js', finalContent);
console.log('Successfully transformed blogsData.js');
