<template>
    <FormModal :modalId="editModalId" :offerToEdit="editedResource" :modalType="1"/>
    <FormModal :modalId="createModalId" :modalType="2"/>
    <div>
        <div class="vld-parent">
            <loading v-model:active="isLoading"
                     :is-full-page="fullPage"/>
        </div>
        <MainMenu/>
        <TopBar
                title="Offers"
                :author="{
        home: 'Home',
        cart: 'Offers'
      }"
        />
        <div id="recommendations" class="row p-0 ps-4 pt-2">
            <div class="main-articles-sold row pt-2 pb-4 mb-0"></div>
        </div>

        <div id="recommendations" class="row p-0 ps-4 mb-5">
            <div class="main-articles-sold row pt-2 pb-4 mb-0">
                <OffersTableBar :predefinded-dates="predefindedDates"/>

                <table class="table" id="datatable">
                    <thead>
                    <tr class="t-headinhg">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Proposition details</th>
                        <th>Articles</th>
                        <th>Date Range</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody class="tb-style">
                    <tr v-for="item in offers" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.details}}</td>
                        <td>{{getArticlesByOffer(item.articles)}}</td>
                        <td>{{item.start_date+"-"+item.end_date}}</td>
                        <td>
                            <button v-bind:class="(item.is_active === true) ? 'status-active-btn' : (item.is_pending === true)? 'status-pending' : (item.is_archive === true) ? 'status-expired' : 'status-pending'">
                                {{(item.is_active === true) ? 'Active' : (item.is_pending === true) ? 'Pending' :
                                (item.is_archive === true) ? 'Expired' : 'Pending'}}
                            </button>
                        </td>
                        <td class="btn-align">
                            <div class="">
                                <button class="action-btns ms-2" v-on:click="editOffer(item)">
                                    <PenIcon/>
                                </button>
                                <button class="action-btns" v-on:click="deleteOffer(item)">
                                    <DeleteIcon/>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    import $ from "jquery";
    import MainMenu from "../Menu/MainMenu.vue";
    import TopBar from "../Menu/TopBar.vue";
    import PenIcon from "../icons/pen.vue";
    import DeleteIcon from '../icons/cancel';
    import OffersTableBar from "./components/OffersTableBar.vue";
    import StatusMixin from '@/Core/mixins/StatusMixin';
    import GlobalGridMixin from '@/Core/mixins/GlobalGridMixin';

    import 'bootstrap/dist/css/bootstrap.min.css';
    import "datatables.net-dt/js/dataTables.dataTables"
    import "datatables.net-dt/css/jquery.dataTables.min.css"

    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import FormModal from './components/FormModal';
    import {mapActions} from 'vuex';

    import {
        LIST_OFFERS,
        DELETE_OFFER,
    } from '@/Core/store/action-types';

    import {DATE_FORMAT} from "../Core/helpers/utils";
    import {RESOURCE_NAME} from './offer.vars';
    import {deleteItem} from '@/Core/helpers/gridUtils';

    export default {
        name: "Offers",
        components: {
            MainMenu,
            TopBar,
            OffersTableBar,
            PenIcon,
            Loading,
            FormModal,
            DeleteIcon
        },
        mixins: [StatusMixin, GlobalGridMixin],
        mounted() {
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
        data: function () {
            return {
                isLoading: true,
                fullPage: true,
                Status: "pending",
                predefindedDates: {
                    'Yesterday': [window.moment().subtract(1, 'days'), window.moment()],
                    'Last 7 Days': [window.moment().subtract(6, 'days'), window.moment()],
                    'Last 30 Days': [window.moment().subtract(29, 'days'), window.moment()],
                    'This Month': [window.moment().startOf('month'), window.moment().endOf('month')],
                    'This Year': [window.moment().startOf('year'),
                        window.moment().endOf('year')]
                },
                params: {},
                offers: {},
                createModalId: "createDialog",
                editModalId: "editDialog",
                editedResource: {},
                articles: '',
                selectedDateRange: ''
            }
        },
        methods: {
            ...mapActions('offer', [LIST_OFFERS, DELETE_OFFER]),
            onDateChange(start, end) {
                this.params = {
                    persist: true,
                    date_after: start.format(DATE_FORMAT),
                    date_before: end.format(DATE_FORMAT),
                    order: '-revenue',
                    //limit: 10
                }
                this.selectedDateRange = start.format(DATE_FORMAT) + " - " + end.format(DATE_FORMAT);
                this.initOffers();
            },
            initOffers() {
                let options = this.params;
                let _this = this;
                this[LIST_OFFERS](options).then(res => {
                    this.offers = res;
                    if (!$.fn.DataTable.isDataTable('#datatable')) {
                        setTimeout(() => {
                            $('#datatable').DataTable({
                                "order": [[5, "asc"]]
                            });
                        });

                    } else {
                        _this.isLoading = true;
                        $('#datatable').DataTable().destroy();
                        setTimeout(function () {
                            $('#datatable').DataTable({
                                "order": [[5, "asc"]]
                            });
                            _this.isLoading = false;
                        }, 2000);
                    }

                    /*$('#datatable_filter input').attr("placeholder", $.parseHTML("     Search by the email or member ID")[0].data);
                    $('#datatable_filter input').attr("class", 'searchIn');*/
                    /*$('#datatable_previous').html('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L1 6M1 6L6 1M1 6L11 6" stroke="#E8E9EB" stroke-width="1.25" stroke-linecap="round"/></svg>')

                    $('#datatable_next').html('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L11 6M11 6L6 1M11 6L1 6" stroke="#E8E9EB" stroke-width="1.25" stroke-linecap="round"/></svg>')*/
                })

            },
            setStatus(statusVal) {
                delete this.params.is_active;
                delete this.params.is_pending;
                delete this.params.is_archive;
                if (statusVal === 'is_active') {
                    this.params.is_active = 1;
                } else if (statusVal === 'is_archive') {
                    this.params.is_archive = 1;
                } else if (statusVal === 'is_pending') {
                    this.params.is_pending = 1;
                } /*else if (statusVal === 'all') {
                    this.params.is_active = 1;
                    this.params.is_archive = 1;
                    this.params.is_pending = 1;
                }*/
                this.initOffers();
            },
            showCreateDialog() {
                window.$(`#${this.createModalId}`).modal('toggle')
            },
            getArticlesByOffer(articles) {
                let articleNameArray = [];
                $.each(articles, function (index) {
                    articleNameArray.push(articles[index].name);
                })
                return articleNameArray.join(', ')
            },
            editOffer(item) {
                this.onUpdateItem(RESOURCE_NAME,
                    window.$(`#${this.editModalId}`),
                    item)
            },
            deleteOffer(item) {
                deleteItem(this.$alertify, this.$ability, this[DELETE_OFFER], RESOURCE_NAME, item)
            }
        },
        created() {
            this.initDateRange = [
                this.predefindedDates['This Month'][0],
                this.predefindedDates['This Month'][1]
            ]
            this.onDateChange(this.initDateRange[0], this.initDateRange[1]);
        },
    };

</script>

<style lang="css">
    * {
        font-family: Lexend;
        font-style: normal;
    }

    .searchIn {
        background: url('../../public/assets/images/search.png') no-repeat scroll left center / 15px auto;
    }

    .searchOut {
        background: none;
    }

    .custom-btn {
        border-color: #e8e9eb;
    }

    .custom-btn:hover {
        background-color: #5e66fa;
        border-color: #5e66fa;
    }

    .custom-btn:active {
        background-color: #5e66fa;
    }

    .create-btn {
        background-color: #5e66fa;
        border-color: #5e66fa;
    }

    .btn-check:active + .btn-outline-primary,
    .btn-check:checked + .btn-outline-primary,
    .btn-outline-primary.active,
    .btn-outline-primary.dropdown-toggle.show,
    .btn-outline-primary:active {
        background-color: #5e66fa;
        border-color: #5e66fa;
    }

    .dt-col {
        margin-top: -24px;
    }

    .dt-col > label {
        font-size: 11px;
        font-family: Lexend;
        font-style: normal;
        font-weight: 500;
        color: #3f3f40;
    }

    .dataTables_info {
        font-size: 13px !important;
        color: #aaabad !important;
    }

    .dataTables_length {
        display: none;
    }

    .dataTables_filter {
        float: left !important;
    }

    #datatable_filter > label {
        font-size: 0;
    }

    #datatable_filter > label > input {
        width: 278px;
        height: 38px;
        font-size: 20px;
        margin-bottom: 18px;
    }

    #datatable_filter > label > input,
    input::-webkit-input-placeholder {
        font-family: Lexend;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        color: #aaabad;
    }

    .position-set {
        position: absolute;
        width: 92%;
    }

    .t-headinhg {
        color: #aaabad;
        font-family: Lexend;
        font-style: normal;
        font-weight: 500;
        font-size: 11px !important;
    }

    .tb-style {
        font-family: Lexend;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        color: #3f3f40;
        border-block-color: #f0f1f3;
    }

    .t-headinhg > th {
        border-block-color: white !important;
    }

    .table {
        border-bottom: none !important;
    }

    .tb-style > tr {
        height: 55px !important;
    }

    td {
        vertical-align: middle;
        align-items: center;
    }

    .tb-style > tr:hover {
        background-color: #f6f6f7;
    }

    .inc-index {
        z-index: 998 !important;
    }

    .action-btns {
        background: #ffffff;

        /* Borders */
        border: 1px solid #e2e2e2;
        box-sizing: border-box;
        border-radius: 3px;
        min-width: 36px;
        min-height: 36px;
    }

    .text-position-custom {

        text-align: end;
    }

    .status-active-btn {
        border: none;
        width: 59px;
        height: 23px;
        background: rgba(11, 201, 132, 0.1);
        border-radius: 4px;
        font-family: Lexend;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        color: #0bc984;
    }

    .status-expired {
        border: none;
        width: 67px;
        height: 23px;
        font-family: Lexend;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        color: #ec4424;
        background: rgba(236, 68, 36, 0.1);
        border-radius: 4px;
    }

    .status-pending {
        border: none;
        width: 71px;
        height: 23px;
        font-family: Lexend;
        font-style: normal;
        font-weight: 600;
        font-size: 11px;
        color: #f29d4f;
        background: rgba(242, 157, 79, 0.1);
        border-radius: 4px;
    }

    .paginate_button.current {
        background: linear-gradient(to bottom, white 0%, #ffffff 100%) !important;
        background-color: rgb(255, 255, 255);
        border: 1px solid #f0f1f2 !important;
        margin-left: 0px !important;
    }

    .current {
        color: #5e66fa !important;
    }

    #datatable_info {
        margin-top: 15px;
    }

    #datatable_paginate {
        margin-top: 10px;
    }

    .date-input {
        background-color: white !important;
        font-weight: normal;
        font-size: 15px;
        color: #3f3f40;
    }

    .positio-icon-btn {
        float: right;
    }

    .btn-align {
        text-align: end !important;
    }

    #datatable_filter > label > input, input::-webkit-input-placeholder {
        font-family: Lexend;
        font-style: normal;
        font-weight: normal;
        font-size: 14px !important;
        color: #aaabad;
        background-position: 5px;
    }

    .vld-overlay {
        background-color: #f2f2f2 !important;
    }

    .multiselect-tag {
        line-height: 14px !important;
    }

    .form-control-feedback {
        margin-top: 10px;
        font-size: 12px;
        color: #EE5030;
    }

    /* Start:: Datatable pagination custom style */

    #datatable_previous {
        border: 1px solid #ddd;
        border-radius: 3px 0 0 3px !important;
        width: 36px;
        overflow: hidden;
        display: inline-flex;
        margin-right: -1px;
    }

    a#datatable_previous:before {
        content: '← ';
        position: relative;
        margin-right: 23px;
        /*content: url(../../public/assets/images/arrow-pointing-to-left.png);*/
    }

    #datatable_next {
        border: 1px solid #ddd;
        border-radius: 0 3px 3px 0 !important;
        margin-left: 0;
        width: 36px;
        overflow: hidden;
        display: inline-flex;
    }

    a#datatable_next:before {
        content: ' →';
        position: relative;
        margin-right: 23px;
        /*content: url(../../public/assets/images/arrow-pointing-to-right.png);*/
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
        color: #fff !important;
        border: 1px solid #ddd;
        background-color: #ddd;
        background: linear-gradient(180deg, #ddd 0, #ddd);
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
        color: #5f66fa !important;
        border: 1px solid #ddd;
        background-color: #fff;
        background: linear-gradient(180deg, #fff 0, #fff);
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover {
        cursor: default;
        color: #666 !important;
        border: 1px solid #ddd !important;
        background: transparent !important;
        box-shadow: none;
        /*filter: brightness(0) invert(0.5);*/
    }

    .dataTables_wrapper .dataTables_paginate #datatable_next:hover {
        background: transparent !important;
        color: #666 !important;
        /*filter: brightness(0) invert(0.5);*/
        border: 1px solid #ddd !important;
    }

    .dataTables_wrapper .dataTables_paginate #datatable_previous:hover {
        background: transparent !important;
        color: #666 !important;
        /*
            filter: brightness(0) invert(0.5);*/
        border: 1px solid #ddd !important;
    }

    .dataTables_wrapper .dataTables_paginate .paginate_button {
        box-sizing: border-box;
        display: inline-block;
        min-width: 1.5em;
        padding: 0.5em 1em;
        margin-left: 0px !important;
        text-align: center;
        text-decoration: none!important;
        cursor: pointer;
        *cursor: hand;
        color: #333!important;
        border: 1px solid #ddd !important;
        /* border-radius: 2px; */
        font-size: 12px;
        line-height: 18px;
        margin-right: -1px;
    }

    /* END:: Datatable pagination custom style */

    @media only screen and (max-width: 900px) {
        #datatable_filter > label > input {
            width: 278px;
            height: 38px;
            font-size: 20px;
            margin-bottom: 75px !important;
        }

        .res-create-btn {
            justify-content: left !important;
            margin-top: 24px !important;
        }

        .res-date-field {
            margin-top: 0px !important;
        }
    }
</style>