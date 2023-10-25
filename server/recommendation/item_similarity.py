from collections import defaultdict
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from crud.product import get_all_products
from crud.history import get_all_purchase_records

async def compute_item_similarity():
    products = await get_all_products()
    purchase_records = await get_all_purchase_records()

    # Combine the name and description of each product to make a corpus
    corpus = [f"{product['name']} {product['description']}" for product in products]

    # Calculate TF-IDF vectors
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(corpus)

    # Calculate cosine similarity
    similarity_matrix = cosine_similarity(tfidf_matrix, tfidf_matrix)

     # Calculate the popularity for each product
    product_popularity = defaultdict(int)
    for record in purchase_records:
        product_popularity[record['product_id']] += 1

    return similarity_matrix, products, product_popularity