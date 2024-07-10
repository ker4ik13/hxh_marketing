import { SERVER_URL } from '@/shared';
import axios from 'axios';

export const $content = axios.create({
	withCredentials: true,
	baseURL: `${SERVER_URL}/api`,
});
