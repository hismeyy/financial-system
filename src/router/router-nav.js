import {createRouter, createWebHistory} from 'vue-router';
import ScenarioBased from "@/view/financial-management/scenario-based/ScenarioBased.vue";
import WishList from "@/view/wish-list/WishList.vue";
import WalletManagement from "@/view/financial-management/wallet-management/WalletManagement.vue";
import FinancialReport from "@/view/financial-report/FinancialReport.vue";
import SystemSetting from "@/view/setting/system-setting/SystemSetting.vue";
import DictionaryConfig from "@/view/setting/dictionary-config/DictionaryConfig.vue";

const routes = [
    {
        path: '/',
        redirect: '/financial-report'
    },
    {
        path: '/financial-report',
        name: 'financial-report',
        component: FinancialReport
    },
    {
        path: '/scenario-based',
        name: 'scenario-based',
        component: ScenarioBased
    },
    {
        path: '/wallet-management',
        name: 'wallet-management',
        component: WalletManagement
    },
    {
        path: '/wish-list',
        name: 'wish-list',
        component: WishList
    },
    {
        path: '/system-setting',
        name: 'system-setting',
        component: SystemSetting
    },
    {
        path: '/dictionary-config',
        name: 'dictionary-config',
        component: DictionaryConfig
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
