import tweepy
import logging

def get_tweets(username, count=5):
    """
    Récupère les derniers tweets d'un utilisateur donné.
    """
    api_key = "TON_API_KEY"
    api_secret = "TON_API_SECRET"
    access_token = "TON_ACCESS_TOKEN"
    access_token_secret = "TON_ACCESS_TOKEN_SECRET"

    try:
        auth = tweepy.OAuth1UserHandler(api_key, api_secret)
        auth.set_access_token(access_token, access_token_secret)
        api = tweepy.API(auth)
        tweets = api.user_timeline(screen_name=username, count=count, tweet_mode="extended")
        return [{"text": tweet.full_text, "created_at": tweet.created_at} for tweet in tweets]
    except Exception as e:
        logging.error(f"❌ Erreur API Twitter : {e}")
        return {"error": "Erreur lors du scraping Twitter"}
