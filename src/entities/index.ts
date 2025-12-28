/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: artisans
 * Interface for Artisans
 */
export interface Artisans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  artisanName?: string;
  /** @wixFieldType image */
  profilePicture?: string;
  /** @wixFieldType text */
  shortBio?: string;
  /** @wixFieldType text */
  fullStory?: string;
  /** @wixFieldType text */
  craftSpecialty?: string;
  /** @wixFieldType boolean */
  featured?: boolean;
}


/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  authorName?: string;
  /** @wixFieldType datetime */
  publishDate?: Date | string;
  /** @wixFieldType text */
  category?: string;
}


/**
 * Collection ID: products
 * Interface for Products
 */
export interface Products {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  productType?: string;
  /** @wixFieldType text */
  material?: string;
  /** @wixFieldType text */
  dimensions?: string;
  /** @wixFieldType text */
  sku?: string;
}
