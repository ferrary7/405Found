from .item_similarity import compute_item_similarity
from crud.history import get_browsing_history, get_purchase_history

# These are initially None and will be set up when the app starts.
similarity_matrix = None
products = None

async def setup_recommendations():
    global similarity_matrix, products, product_popularity
    similarity_matrix, products, product_popularity = await compute_item_similarity()

async def recommend_by_content(user_id, n=5):
    """Generate recommendations for a given user based on content similarity."""
    if similarity_matrix is None or products is None:
        raise Exception("Recommendation system is not initialized.")

    browsing_records = await get_browsing_history(user_id)
    purchase_records = await get_purchase_history(user_id)

    # Get product IDs from the records
    browsed_products = [record['product_id'] for record in browsing_records]
    purchased_products = [record['product_id'] for record in purchase_records]

    # Calculate scores for products based on similarity
    scores = {}
    for product_id in browsed_products + purchased_products:
        for j, similarity_score in enumerate(similarity_matrix[product_id]):
            if j not in scores:
                scores[j] = 0
            scores[j] += similarity_score

    # Get top n products
    recommended_product_ids = sorted(scores, key=scores.get, reverse=True)[:n]

    return [products[id] for id in recommended_product_ids]

async def recommend_by_popularity(n=5):
    """Generate recommendations based on product popularity."""
    if product_popularity is None:
        raise Exception("Recommendation system is not initialized.")

    # Get top n popular products based on purchase counts
    recommended_product_ids = sorted(product_popularity, key=product_popularity.get, reverse=True)[:n]

    return [products[id] for id in recommended_product_ids]
