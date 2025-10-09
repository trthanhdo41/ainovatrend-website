/**
 * API Client for AinovaTrend Backend
 * Kết nối với Google Sheets thông qua Node.js backend
 */

class AinovaTrendAPI {
    constructor() {
        // Production URL - Vercel (working)
        this.baseURL = 'https://backend-tawny-nine-24.vercel.app/api';
        // New project name (not working yet)
        // this.baseURL = 'https://ainovatrend-backend.vercel.app/api';
        // Local development URL
        //this.baseURL = 'http://localhost:3000/api';
    }

    // Helper method để gọi API
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await fetch(url, { ...defaultOptions, ...options });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // Reviews API
    async getReviews() {
        return await this.request('/reviews');
    }

    async addReview(reviewData) {
        return await this.request('/reviews', {
            method: 'POST',
            body: JSON.stringify(reviewData)
        });
    }

    async updateReview(id, reviewData) {
        return await this.request(`/reviews/${id}`, {
            method: 'PUT',
            body: JSON.stringify(reviewData)
        });
    }

    async deleteReview(id) {
        return await this.request(`/reviews/${id}`, {
            method: 'DELETE'
        });
    }

    // Blogs API
    async getBlogs() {
        return await this.request('/blogs');
    }

    async addBlog(blogData) {
        return await this.request('/blogs', {
            method: 'POST',
            body: JSON.stringify(blogData)
        });
    }

    async updateBlog(id, blogData) {
        return await this.request(`/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify(blogData)
        });
    }

    async deleteBlog(id) {
        return await this.request(`/blogs/${id}`, {
            method: 'DELETE'
        });
    }

    // Contact Messages API
    async getMessages() {
        return await this.request('/messages');
    }

    async addMessage(messageData) {
        return await this.request('/messages', {
            method: 'POST',
            body: JSON.stringify(messageData)
        });
    }

    async deleteMessage(id) {
        return await this.request(`/messages/${id}`, {
            method: 'DELETE'
        });
    }

    // Health check
    async healthCheck() {
        return await this.request('/health');
    }
}

// Initialize global API instance
window.ainovaTrendAPI = new AinovaTrendAPI();
